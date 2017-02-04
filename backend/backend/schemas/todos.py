from marshmallow import Schema, fields


class TodoSchema(Schema):
    id = fields.Int(dump_only=True)
    name = fields.Str(missing='', required=True)
    done = fields.Boolean(required=True)

    class Meta:
        strict = True
