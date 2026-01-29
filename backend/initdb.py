import sqlalchemy as sa
import db

schema = 'corporate'

db.meta.schema = schema

db.session.execute(sa.text(f'CREATE SCHEMA IF NOT EXISTS {schema}'))
db.session.execute(sa.text('COMMIT'))

import db.companies

db.meta.create_all(bind=db.engine, checkfirst=True)
db.session.close()
