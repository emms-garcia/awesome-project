from flask_restful import Api

from backend.resources.users import UserIdentityResource, UserListResource
from backend.resources.widgets import WidgetDetailResource, WidgetListResource

api = Api()

# Widgets
api.add_resource(WidgetListResource, '/widgets')
api.add_resource(WidgetDetailResource, '/widgets/<widget_id>')

# Users
api.add_resource(UserIdentityResource, '/identity')
api.add_resource(UserListResource, '/users')
