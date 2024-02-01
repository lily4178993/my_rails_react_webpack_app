class Api::V1::GreetingsController < ApplicationController
  def hello
    message = Message.order('RANDOM()').first
    render json: { message: message.greeting }
  end
end
