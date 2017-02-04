from backend.models import db


class Todos(db.Model):
    __tablename__ = 'todos'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.Unicode, nullable=False)
    done = db.Column(db.Boolean, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))

    def create(self):
        db.session.add(self)
        db.session.commit()
        return self
