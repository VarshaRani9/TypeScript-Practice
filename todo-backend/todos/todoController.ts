import {
    Body,
    Controller,
    Get,
    Path,
    Post,
    Query,
    Route,
    SuccessResponse,
  } from "tsoa";
  import { Todo } from "./todo";
  import { todoService, TodoCreationParams } from "./todoService";

  @Route("todo")
  export class todoController extends Controller {

    @Get("{id}")
    public async getTodo(
      @Path() id: string
    ): Promise<Todo>{
        let todoServ =  new todoService()
        return todoServ.get(id);

    }

}