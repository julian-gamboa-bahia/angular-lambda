import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

// Serviço para consomer a API (método GET) 

import { GetFotosBucketService } from '../../services/get-fotos-bucket.service';

@Component({
  selector: 'app-lista-pastas',
  templateUrl: './lista-pastas.component.html',
  styleUrls: ['./lista-pastas.component.css']
})

  export class ListaPastasComponent implements OnInit {

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