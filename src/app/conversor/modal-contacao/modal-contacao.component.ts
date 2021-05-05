import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import { ConversaoResponse, Conversao } from '../models';
import { ConversorService } from '../services';

@Component({
  selector: 'modal-contacao',
  templateUrl: './modal-contacao.component.html',
  styleUrls: ['./modal-contacao.component.css'],
})
export class ModalContacaoComponent implements OnInit {
  @Input() id: string;
  @Input() conversaoResponse: ConversaoResponse;
  @Input() conversao: Conversao = new Conversao();
  @Output() onConfirm: EventEmitter<any> = new EventEmitter<any>();

  constructor(private ConversorService: ConversorService) {}

  ngOnInit(): void {}

  novaConsulta() {
    this.onConfirm.emit();
  }

  get valorConvertido(): string {
    if (this.conversaoResponse === undefined) {
      return '0';
    }

    return (this.conversao.valor * this.conversaoResponse.high).toFixed(2);
  }

  get cotacaoPara(): number {
    return this.ConversorService.cotacaoPara(
      this.conversaoResponse,
      this.conversao
    );
  }

  get cotacaoDe(): string {
    return this.ConversorService.cotacaoDe(
      this.conversaoResponse,
      this.conversao
    );
  }

  get dataCotacao(): string {
    return this.ConversorService.dataCotacao(this.conversaoResponse);
  }
}
