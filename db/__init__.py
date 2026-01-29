
import os
import sqlalchemy as sa
import sqlalchemy.orm

engine = sa.create_engine(
    url          = 'postgresql://postgres@localhost:5432/ghost',
    echo         = bool(os.getenv('DEBUG')),
    connect_args = {
        'options' : '-c timezone=America/Toronto',
    }
)

meta = sa.MetaData(schema=None)

Session = sqlalchemy.orm.scoped_session(sqlalchemy.orm.sessionmaker(bind=engine))
session = Session()


class Base(sqlalchemy.orm.DeclarativeBase):
    metadata = meta
    pass
