import { createParamDecorator } from "@nestjs/common";

// data指的是 括号中的传参
export const CurrentUser = createParamDecorator((data, req) => req.user)