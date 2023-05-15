import { Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent, map, Subscription } from 'rxjs';

@Component({
  selector: 'selection-pays',
  templateUrl: './selection-pays.component.html',
  styleUrls: ['./selection-pays.component.css']
})
export class SelectionPaysComponent {
  @ViewChild('barreRecherche')
  barreRecherche: ElementRef;

  listePays: Array<Pays> = [
    {
      code: 'AF',
      libelle: 'Afghanistan'
    },
    {
      code: 'BS',
      libelle: 'Bahamas'
    },
    {
      code: 'CV',
      libelle: 'Cavo Verde'
    },
    {
      code: 'EC',
      libelle: 'Ecuador'
    },
    {
      code: 'FK',
      libelle: 'Falkland Islands'
    }
  ];

  listePaysSelectionnes: Array<Pays> = [];

  cliquerPays(event: MouseEvent) {
    const paysSelectionne = event.target as HTMLElement;
    if (paysSelectionne != null)
      this.barreRecherche.nativeElement.value = paysSelectionne.innerText;
  }

  subscription: Subscription;

  ngAfterViewInit() {
    let elemBarreRecherche = this.barreRecherche.nativeElement;
    this.subscription = fromEvent(elemBarreRecherche, 'keypress')
      .pipe(
        map(x => elemBarreRecherche.value)
      )
      .subscribe(valeurBarreRecherche => {
        if (valeurBarreRecherche.trim().length == 0) this.listePaysSelectionnes = [];
        else this.listePaysSelectionnes = this.listePays.filter(pays => pays.libelle.startsWith(valeurBarreRecherche));
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  listeFocus() {
    let valeurBarreRecherche = this.barreRecherche.nativeElement.value;
    if (valeurBarreRecherche.trim().length > 0)
      this.listePaysSelectionnes = this.listePays.filter(pays => pays.libelle.startsWith(valeurBarreRecherche));
  }

  listeBlur() {
    setTimeout(() => {
      this.listePaysSelectionnes = [];
    }, 100);
  }
}

export interface Pays {
  code: string;
  libelle: string;
}