import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { GetFotosBucketService } from '../../services/get-fotos-bucket.service';

@Component({
  selector: 'app-select-classificador',
  templateUrl: './select-classificador.component.html',
  styleUrls: ['./select-classificador.component.css']
})

// Serviço para consomer a API (método GET)

  export class SelectClassificadorComponent implements OnInit {

    //Uma vez feita a escolha da ETIQUETA será chamado o POST

    nova_etiqueta: string = '';

    //event handler for the select element's change event
    selectChangeHandler (event: any) {
      //update the ui
      this.nova_etiqueta = event.target.value;
    }

////////////////////
    nome_pasta: String[]=[];

    constructor(private activatedRoute: ActivatedRoute,private getFotosBucketService: GetFotosBucketService) {
    }

    ngOnInit(): void {

      this.getUrl_imagem_METODO();

    }

    // Chama o serviço para obtém todas as fotos

    url_foto : String[] | undefined;  

    getUrl_imagem_METODO() {
      this.getFotosBucketService.getUrl_imagem("").subscribe((url_foto: String[]) => {
        this.nome_pasta = url_foto.reverse();    
      });
  ///////////////////////////////
  }
}