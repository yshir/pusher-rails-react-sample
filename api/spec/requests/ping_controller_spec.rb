# frozen_string_literal: true

require 'rails_helper'

RSpec.describe PingController, type: :request do
  let!(:headers) { default_headers }

  describe 'GET /ping' do
    subject { get '/ping', headers: }

    it { is_expected.to eq 200 }
  end
end
