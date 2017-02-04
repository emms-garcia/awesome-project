from flask_restful import Api

from backend.resources.users import UserIdentityResource, UserListResource
from backend.resources.todos import TodoDetailResource, TodoListResource

api = Api()

# Todos
api.add_resource(TodoListResource, '/todos')
api.add_resource(TodoDetailResource, '/todos/<todo_id>')

# Users
api.add_resource(UserIdentityResource, '/identity')
api.add_resource(UserListResource, '/users')
