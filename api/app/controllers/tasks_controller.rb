# frozen_string_literal: true

class TasksController < ApplicationController
  def index
    tasks = Task.all

    render json: tasks
  end

  def create
    pusher = PusherClient.new

    task = Task.new(create_params)
    task.is_done = false

    if task.save
      pusher.trigger('task-channel', 'task-created', tasks: Task.all)

      head :no_content
    else
      head :bad_request
    end
  end

  private

  def create_params
    params.permit(:title)
  end
end
