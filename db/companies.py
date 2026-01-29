#!./venv/bin/python
# flake8: noqa
import os
import sqlalchemy as sa

import sqlalchemy.ext.declarative
import sqlalchemy.dialects.postgresql
import datetime as dt

import db


class Company(db.Base):
    """
        @ declarative base form db module,
        field to store comapny info
        backref to avoid joins
    """
    __tablename__  = 'company'
    __table_args__ = {
        "schema" : 'corporate',
        "comment": 'Company description'
    }

    pk          = sa.Column(sa.Integer, autoincrement=True, primary_key=True)
    JobID       = sa.Column(sa.String())
    name        = sa.Column(sa.String())
    location    = sa.Column(sa.String())
    domain      = sa.Column(sa.String())
    ghostScore  = sa.Column(sa.Float, default=0.0)

    jobs    = sa.orm.relationship('Joblisting', backref='company', lazy=True)
    insider = sa.orm.relationship('Insider', backref='company', lazy=True)


class Joblisting(db.Base):
    """
        Core logic for job listing
    """
    __tablename__  = "listing"
    __table_args__ = {
        "schema" : "corporate",
        "comment": "Job listing of the corporate site"
    }

    pk         = sa.Column(sa.Integer, autoincrement=True, primary_key=True)
    companyId  = sa.Column(sa.Integer, sa.ForeignKey('corporate.company.pk'), nullable=False)
    title      = sa.Column(sa.String())
    url        = sa.Column(sa.String())

    firstSeenAt  = sa.Column(sa.DateTime, default=dt.datetime.utcnow)
    lastSeenAt   = sa.Column(sa.DateTime, default=dt.datetime.utcnow)
    repostCount  = sa.Column(sa.Integer, default=0)
    isActive     = sa.Column(sa.Boolean, default=True)

    snapshots = sa.orm.relationship('JobSnapshot', backref='job', lazy=True)
    reports   = sa.orm.relationship('Report', backref='job', lazy=True)


class JobSnapshot(db.Base):
    """
        Job Snapshot
    """
    __tablename__  = 'snapshot'
    __table_args__ = {
        "schema" : "corporate",
        "comment": "All the listing from the corporate sites"
    }

    pk          = sa.Column(sa.Integer, autoincrement=True, primary_key=True)
    JobId       = sa.Column(sa.Integer, sa.ForeignKey('corporate.listing.pk'), )
    postedDate  = sa.Column(sa.DateTime(timezone=True), default=dt.datetime.utcnow)
    seenAt      = sa.Column(sa.DateTime, default=dt.datetime.utcnow)
    salaryRange = sa.Column(sa.String())


class Report(db.Base):
    __tablename__  = 'report'
    __table_args__ = {
        'schema' : "corporate",
        "comment": "store user feedback"
    }

    pk           = sa.Column(sa.Integer, autoincrement=True, primary_key=True)
    JobId        = sa.Column(sa.Integer, sa.ForeignKey('corporate.listing.pk'), nullable=False)
    report_type  = sa.Column(sa.String(50), nullable=False) # 'GHOSTING', 'FAKE', 'SCAM'
    description  = sa.Column(sa.Text)
    evidence_url = sa.Column(sa.String(500)) # URL to S3 bucket image
    created_at   = sa.Column(sa.DateTime, default=dt.datetime.utcnow)


class Insider(db.Base):
    """
        Stored Hash for privacy
    """
    __tablename__ = 'insider'
    __table_args__ = {
        "comment" : 'Hash user'
    }

    pk          = sa.Column(sa.Integer, primary_key=True, nullable=False, autoincrement=True)
    companyId   = sa.Column(sa.Integer, sa.ForeignKey('corporate.company.pk'), nullable=False)

    email_hash  = sa.Column(sa.String(64), unique=True, nullable=False) 
    verified_at = sa.Column(sa.DateTime, default=dt.datetime.utcnow)
