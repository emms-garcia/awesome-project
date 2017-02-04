from flask_jwt import jwt_required, current_identity
from flask_restful import Resource
from sqlalchemy import exc
from webargs.flaskparser import use_args

from backend.models.users import Users
from backend.schemas.users import UserSchema


class UserIdentityResource(Resource):

    @jwt_required()
    def get(self):
        return UserSchema().dump(current_identity)


class UserListResource(Resource):

    @use_args(UserSchema())
    def post(self, payload):
        user = Users(**payload)
        try:
            user.create()
            return UserSchema().dump(user)
        except exc.IntegrityError:
            return {'message': 'Email already in use'}, 400
