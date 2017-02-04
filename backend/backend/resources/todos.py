from flask_restful import Resource
from webargs.flaskparser import use_args

from backend.models.todos import Todos
from backend.schemas.todos import TodoSchema


class TodoDetailResource(Resource):
    def get(self, todo_id):
        user = Todos.query.filter_by(id=todo_id).first()
        if user:
            return TodoSchema().dump(user)
        return {'message': 'Todo not found'}, 404


class TodoListResource(Resource):
    def get(self):
        return TodoSchema(many=True).dump(Todos.query.all())

    @use_args(TodoSchema())
    def post(self, payload):
        todo = Todos(**payload)
        return TodoSchema().dump(todo.create())
