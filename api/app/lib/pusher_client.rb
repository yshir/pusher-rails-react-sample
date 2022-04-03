class PusherClient < Pusher::Client
  APP_ID = ENV.fetch('PUSHER_APP_ID', Rails.application.credentials.pusher[:app_id])
  KEY = ENV.fetch('PUSHER_KEY', Rails.application.credentials.pusher[:key])
  SECRET = ENV.fetch('PUSHER_SECRET', Rails.application.credentials.pusher[:secret])
  CLUSTER = ENV.fetch('PUSHER_CLUSTER', Rails.application.credentials.pusher[:cluster])

  def initialize
    raise "Abort initialize pusher client because environment is `#{Rails.env}`" if Rails.env.test?

    super(
      app_id: PusherClient::APP_ID,
      key: PusherClient::KEY,
      secret: PusherClient::SECRET,
      cluster: PusherClient::CLUSTER,
      encrypted: true
    )
  end
end
