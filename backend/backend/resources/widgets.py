from flask_restful import Resource
from webargs.flaskparser import use_args

from backend.models.widgets import Widgets
from backend.schemas.widgets import WidgetSchema


class WidgetDetailResource(Resource):
    def get(self, widget_id):
        user = Widgets.query.filter_by(id=widget_id).first()
        if user:
            return WidgetSchema().dump(user)
        return {'message': 'Widget not found'}, 404


class WidgetListResource(Resource):
    def get(self):
        return WidgetSchema(many=True).dump(Widgets.query.all())

    @use_args(WidgetSchema())
    def post(self, payload):
        widget = Widgets(**payload)
        return WidgetSchema().dump(widget.create())
