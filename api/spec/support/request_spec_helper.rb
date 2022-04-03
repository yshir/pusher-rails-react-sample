# frozen_string_literal: true

module RequestSpecHelper
  def default_headers
    {
      HTTP_ACCEPT: 'application/json',
      ACCEPT: 'application/json',
      CONTENT_TYPE: 'application/json',
      HOST: 'localhost.com:3000'
    }
  end

  def authorized_headers(user)
    default_headers.merge({ AUTHORIZATION: user.id })
  end
end

RSpec.configure do |config|
  config.include RequestSpecHelper, type: :request
end
