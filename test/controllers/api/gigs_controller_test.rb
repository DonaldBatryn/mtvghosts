require 'test_helper'

class Api::GigsControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get api_gigs_create_url
    assert_response :success
  end

  test "should get destroy" do
    get api_gigs_destroy_url
    assert_response :success
  end

  test "should get show" do
    get api_gigs_show_url
    assert_response :success
  end

  test "should get index" do
    get api_gigs_index_url
    assert_response :success
  end

  test "should get update" do
    get api_gigs_update_url
    assert_response :success
  end

end
