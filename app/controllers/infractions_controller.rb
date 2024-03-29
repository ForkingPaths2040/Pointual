class InfractionsController < ApplicationController
  before_action :set_infraction, only: [:show, :update, :destroy]

  # GET /employees/1
  def index
    @employee =Employee.find(params[:employee_id])
    @infractions = @employee.infractions
  
    render json: @infractions
  end

  # GET /infractions
  def allLogs
    @infractions = Infraction.all

    render json: @infractions
  end

  # GET /infractions/1
  def show
    # @employee =Employee.find(params[:employee_id])
    # @infraction = @employee.infractions.find(params[:id])
    render json: @infraction
  end

  # POST /infractions
  def create
    @employee =Employee.find(params[:employee_id])
    @infraction = @employee.infractions.new(infraction_params)

    if @infraction.save
      render json: @infraction, status: :created
    else
      render json: @infraction.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /infractions/1
  def update
    # @employee =Employee.find(params[:employee_id])
    # @infraction = @employee.infractions.find(params[:id])
    if @infraction.update(infraction_params)
      render json: @infraction
    else
      render json: @infraction.errors, status: :unprocessable_entity
    end
  end

  # DELETE /infractions/1
  def destroy
    # @employee =Employee.find(params[:employee_id])
    # @infraction = @employee.infractions.find(params[:id]).destroy
    @infraction.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_infraction
      @employee =Employee.find(params[:employee_id])
      @infraction = @employee.infractions.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def infraction_params
      params.require(:infraction).permit(:attendance, :date, :points, :reason, :employee_id)
    end
end
