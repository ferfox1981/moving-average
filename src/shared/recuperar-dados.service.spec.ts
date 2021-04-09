import { TestBed } from '@angular/core/testing';

import { RecuperarDadosService } from './recuperar-dados.service';

describe('RecuperarDadosService', () => {
  let service: RecuperarDadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecuperarDadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
