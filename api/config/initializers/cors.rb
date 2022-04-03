# Be sure to restart your server when you modify this file.

# Avoid CORS issues when API is called from the frontend app.
# Handle Cross-Origin Resource Sharing (CORS) in order to accept cross-origin AJAX requests.

# Read more: https://github.com/cyu/rack-cors

Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins origin
    resource "*", headers
  end
end

def origin
  origin = Rails.application.credentials.cors[:origin]
  if origin.nil? || origin.empty?
    Rails.logger.warn("\e[33m[Warning] Cors origins was not set!")
    ''
  else
    Regexp.new(origin)
  end
end

def headers
  {
    headers: :any,
    methods: [:get, :post, :put, :patch, :delete, :options, :head],
    credentials: true
  }
end
