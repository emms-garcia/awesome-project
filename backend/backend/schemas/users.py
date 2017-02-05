from marshmallow import Schema, fields, validate

from backend.models.users import Users


class UserSchema(Schema):
    created_date = fields.DateTime(dump_only=True)
    email = fields.Email(required=True)
    id = fields.Int(dump_only=True)
    name = fields.Str(required=True, validate=validate.Length(min=3))
    password = fields.Str(
        load_only=True,
        required=True,
        validate=validate.Length(min=3),
    )
    role = fields.Str(missing=Users.Roles.USER)

    class Meta:
        strict = True
