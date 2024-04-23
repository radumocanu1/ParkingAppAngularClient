import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {KeycloakService} from "./keycloak-service";
import {TokenInterceptor} from "./token-interceptor";

@NgModule({
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
    KeycloakService, // Asigură-te că serviciul Keycloak este inclus aici
  ],
})
export class InterceptorModule {}
