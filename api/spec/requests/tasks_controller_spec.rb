# frozen_string_literal: true

require 'rails_helper'

RSpec.describe TasksController, type: :request do
  let!(:headers) { default_headers }

  describe 'GET /tasks' do
    subject { get '/tasks', headers: }

    it { is_expected.to eq 200 }
  end
end
