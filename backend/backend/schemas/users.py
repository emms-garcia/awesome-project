from marshmallow import Schema, fields

from backend.models.users import Users


class UserSchema(Schema):
    created_date = fields.DateTime(dump_only=True)
    email = fields.Email(required=True)
    id = fields.Int(dump_only=True)
    name = fields.Str(
        required=True,
    )
    password = fields.Str(
        load_only=True,
        required=True,
    )
    role = fields.Str(missing=Users.Roles.USER)

    class Meta:
        strict = True
