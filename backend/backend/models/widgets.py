from backend.models import db


class Widgets(db.Model):
    __tablename__ = 'widgets'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.Unicode, nullable=False)
    description = db.Column(db.Unicode, nullable=True)
    snippet = db.Column(db.Text, nullable=False)

    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))

    def create(self):
        db.session.add(self)
        db.session.commit()
        return self
