# frozen_string_literal: true

class TasksController < ApplicationController
  def index
    tasks = Task.all

    render json: tasks
  end

  def create
    task = Task.new(create_params)
    task.is_done = false

    if task.save
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
