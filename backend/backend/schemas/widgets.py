from marshmallow import Schema, fields, validate


class WidgetSchema(Schema):
    id = fields.Int(dump_only=True)
    name = fields.Str(required=True, validate=validate.Length(min=3))
    description = fields.Str(missing='')
    snippet = fields.Str(required=True)

    class Meta:
        strict = True
