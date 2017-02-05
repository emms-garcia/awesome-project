from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from werkzeug.security import check_password_hash, generate_password_hash

from backend.models import db


class Users(db.Model):

    class Roles:
        USER = 'user'

    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.Unicode, nullable=False)
    name = db.Column(db.Unicode)
    password = db.Column(db.Text, nullable=False)
    role = db.Column(db.Unicode, nullable=False)
    created_date = db.Column(
        db.DateTime, nullable=False, server_default=func.now()
    )

    todos = relationship('Todos', backref='user')

    def __init__(self, *args, **kwargs):
        kwargs['password'] = generate_password_hash(kwargs['password'])
        super(Users, self).__init__(*args, **kwargs)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def create(self):
        db.session.add(self)
        db.session.commit()
        return self
