class NotesController < ApplicationController
  def index
  	@note = Note.new
  	@notes = Note.all
  end

  def create
  	note = Note.create(note_params)
  	render :json => note
  end

  def destroy
  	Note.find(params[:id]).destroy
  	#MAKE SURE THIS IS AN ACTUAL HASH, TREY!
  	#NOT JUST A STRING!  YOU IDIOT!
  	render :json => {:message => 'note deleted'}
  end

  private

  def note_params
  	params.require(:note).permit(:note, :title)
  end
end
