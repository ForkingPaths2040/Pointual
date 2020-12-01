class InfractionsController < ApplicationController
  before_action :set_infraction, only: [:show, :update, :destroy]

  # GET /infractions
  def index
    @employee =Employee.find(params[:employee_id])
    @infractions = @employee.infractions
    

    render json: @infractions
  end

  # GET /infractions/1
  def show
    
    render json: @infraction
  end

  # POST /infractions
  def create
    @infraction = Infraction.new(infraction_params)

    if @infraction.save
      render json: @infraction, status: :created, location: @infraction
    else
      render json: @infraction.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /infractions/1
  def update
    if @infraction.update(infraction_params)
      render json: @infraction
    else
      render json: @infraction.errors, status: :unprocessable_entity
    end
  end

  # DELETE /infractions/1
  def destroy
    @infraction.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_infraction
      @infraction = Infraction.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def infraction_params
      params.require(:infraction).permit(:attendance, :date, :points, :reason)
    end
end
