class Api::BenchesController < ApplicationController 

    def index
        @benches = Bench.all
        render :index
    end

    def create
        @bench = Bench.new(bench_params)
        if @bench.save   
            render :index
        else
            render @bench.errors.full_messages
        end
    end


    private 
    
    def bench_params 
        params.require(:bench).permit(:description, :lat, :long)
    end
end