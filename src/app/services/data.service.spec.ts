import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../../environments/environment';
import { HttpErrorResponse } from '@angular/common/http';
describe('DataService', () => {
  let service: DataService;
  let httpMock: HttpTestingController;

  let requestNotification={
    user_id:   15947
  };

  let responseNotification={
    "notificationUser": [
        {
            "id": 19069,
            "user_id": 15947,
            "from": "Centro de notificaciones",
            "to": "Centro de notificaciones",
            "subject": "Reporte exportado: Particpantes de profe",
            "content": "<p>La exportación del reporte Particpantes de profe se generó satisfactoriamente.&nbsp;</p>\n\n<p>Descargar el reporte <a target=\"_blank\" href=\"https://stage-exporter.guardiandelaproductividad.com/storage/REPORTE_PARTICPANTES_DE_PROFE_16408991885769.csv\">Aquí</a></p>\n\n<p>Tambien puede ingresar al módulo de mensajes.</p>",
            "is_readed": 0,
            "date": "2021-12-30T21:25:31.000Z",
            "readed_at": null
        },
        {
            "id": 19068,
            "user_id": 15947,
            "from": "Centro de notificaciones",
            "to": "Centro de notificaciones",
            "subject": "Reporte exportado: Particpantes de profe (virtual)",
            "content": "<p>La exportación del reporte Particpantes de profe (virtual) se generó satisfactoriamente.&nbsp;</p>\n\n<p>Descargar el reporte <a target=\"_blank\" href=\"https://stage-exporter.guardiandelaproductividad.com/storage/REPORTE_PARTICPANTES_DE_PROFE_(VIRTUAL)_16408957408304.csv\">Aquí</a></p>\n\n<p>Tambien puede ingresar al módulo de mensajes.</p>",
            "is_readed": 0,
            "date": "2021-12-30T20:27:31.000Z",
            "readed_at": null
        }
    ],
    "countNotification": {
        "contador": 42
    }
};


  let vectorresp={
    "data": [
        {
            "label": "Configuración",
            "items": [
                {
                    "label": "Términos y condiciones",
                    "ruta": "/app/configuration/term-condition",
                    "icon": null
                },
                {
                    "label": "Tratamiento datos personales",
                    "ruta": "/app/configuration/privacy-policy",
                    "icon": null
                }
            ]
          }
        ]
      }

      let vectorInfo ={
        "data": {
            "listData": [
                {
                    "idGeneral": 74,
                    "id": 74,
                    "name": "Ver mi perfil",
                    "menu_id": 470,
                    "icon": null,
                    "ubicacion": 2,
                    "padre": 0,
                    "consecutivo": 10,
                    "ruta": "/app/user/account",
                    "status": 1,
                    "creado_por": 1,
                    "modificado_por": 1,
                    "created_at": "2022-03-16T14:35:32.000Z",
                    "updated_at": "2022-03-16T14:35:32.000Z",
                    "nameMenu": "Ver mi perfil"
                },
                {
                    "idGeneral": 78,
                    "id": 78,
                    "name": "Recorrido de bienvenida",
                    "menu_id": 470,
                    "icon": null,
                    "ubicacion": 2,
                    "padre": 0,
                    "consecutivo": 20,
                    "ruta": "/app/tour/welcome",
                    "status": 1,
                    "creado_por": 1,
                    "modificado_por": 1,
                    "created_at": "2022-03-16T14:35:32.000Z",
                    "updated_at": "2022-03-16T14:35:32.000Z",
                    "nameMenu": "Recorrido de bienvenida"
                },
                {
                    "idGeneral": 75,
                    "id": 75,
                    "name": "Términos y condiciones",
                    "menu_id": 470,
                    "icon": null,
                    "ubicacion": 2,
                    "padre": 0,
                    "consecutivo": 30,
                    "ruta": "/api/customer/user/licence-download",
                    "status": 1,
                    "creado_por": 1,
                    "modificado_por": 1,
                    "created_at": "2022-03-16T14:35:32.000Z",
                    "updated_at": "2022-03-16T14:35:32.000Z",
                    "nameMenu": "Términos y condiciones"
                },
                {
                    "idGeneral": 76,
                    "id": 76,
                    "name": "Política de privacidad",
                    "menu_id": 470,
                    "icon": null,
                    "ubicacion": 2,
                    "padre": 0,
                    "consecutivo": 40,
                    "ruta": "/api/customer/user/privacy-download",
                    "status": 1,
                    "creado_por": 1,
                    "modificado_por": 1,
                    "created_at": "2022-03-16T14:35:32.000Z",
                    "updated_at": "2022-03-16T14:35:32.000Z",
                    "nameMenu": "Política de privacidad"
                },
                {
                    "idGeneral": 77,
                    "id": 77,
                    "name": "Cerrar sesión",
                    "menu_id": 470,
                    "icon": null,
                    "ubicacion": 2,
                    "padre": 0,
                    "consecutivo": 50,
                    "ruta": "/logout",
                    "status": 1,
                    "creado_por": 1,
                    "modificado_por": 1,
                    "created_at": "2022-03-16T14:35:32.000Z",
                    "updated_at": "2022-03-16T14:35:32.000Z",
                    "nameMenu": "Cerrar sesión"
                }
            ],
            "company": "PRUEBAS BOLIVAR",
            "user": {
                "fullname": "SONIA CASTILLO",
                "roleUser": "RESPONSABLE SST"
            }
        }
    }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        DataService,
        CookieService
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    service = TestBed.inject(DataService);
  });


  beforeEach(() => {
    service = TestBed.inject(DataService);
    httpMock = TestBed.inject(HttpTestingController)
  });

  afterAll(() => {
    httpMock.verify()
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getallSidebar', () => {
    service.get().subscribe(resp => {
      expect(resp).toEqual(vectorresp);
    })
    const req = httpMock.expectOne(environment.APIDomain+'sidebar')
    expect(req.request.method).toBe("POST")
    req.flush(vectorresp)
  });


});
