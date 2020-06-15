import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import baseList from '../../../assets/baseList.json';
import {BouffeItem} from '../../bouffe-item';

@Component({
  selector: 'app-bouffe-control-pannel',
  templateUrl: './bouffe-control-pannel.component.html',
  styleUrls: ['./bouffe-control-pannel.component.css']
})
export class BouffeControlPannelComponent implements OnInit{
  @Input() bouffeList: BouffeItem[];
  @Output() bouffeListChange = new EventEmitter<BouffeItem[]>();
  bouffeListOptions = Object.keys(baseList);
  selectedList: string;
  newBouffe = 'Burger';
  pannelIsClosed = false;

  ngOnInit(): void {
    this.selectedList = 'Vide';
    this.bouffeList = baseList.Vide;
    this.bouffeListChange.emit(this.bouffeList);
  }

  newSelection() {
    this.bouffeList = baseList[this.selectedList].map(item => new BouffeItem(item, true));
    this.bouffeListChange.emit(this.bouffeList);
  }

  addToList() {
    this.bouffeList.push(new BouffeItem(this.newBouffe, true));
    this.newBouffe = '';
  }

  allWanted() {
    this.bouffeList.forEach(bouffeItem => bouffeItem.isWanted = true);
  }

  allRejected() {
    this.bouffeList.forEach(bouffeItem => bouffeItem.isWanted = false);
  }

  toggleControlPannel() {
    this.pannelIsClosed = !this.pannelIsClosed;
  }
}
