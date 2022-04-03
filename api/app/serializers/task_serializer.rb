# frozen_string_literal: true

# == Schema Information
#
# Table name: tasks
#
#  id         :bigint           not null, primary key
#  is_done    :boolean          not null
#  title      :string(255)      not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class TaskSerializer < ActiveModel::Serializer
  attributes :id, :title, :is_done, :created_at
end
