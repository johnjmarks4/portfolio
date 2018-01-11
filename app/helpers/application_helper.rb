module ApplicationHelper

  def on_page button_name
    action_name == button_name ? button_name + "_green" : button_name
  end
end