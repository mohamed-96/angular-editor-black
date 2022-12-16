import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, ViewChild } from '@angular/core';
import { FabricjsEditorComponent } from 'projects/angular-editor-fabric-js/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-editor-fabric-js';
  selectedSize = '0';
  @ViewChild('canvas', { static: false }) canvas: FabricjsEditorComponent;

  public rasterize() {
    this.canvas.rasterize();
  }

  public rasterizeSVG() {
    this.canvas.rasterizeSVG();
  }

  public saveCanvasToJSON() {
    this.canvas.saveCanvasToJSON();
  }

  public loadCanvasFromJSON() {
    this.canvas.loadCanvasFromJSON();
  }

  public confirmClear() {
    this.canvas.confirmClear();
  }

  public changeSize() {
    this.canvas.changeSize();
  }

  public addText() {
    this.canvas.addText();
  }

  public getImgPolaroid(event) {
    this.canvas.getImgPolaroid(event);
  }

  public addImageOnCanvas(url) {
    this.canvas.addImageOnCanvas(url);
  }

  public readUrl(event) {
    this.canvas.readUrl(event);
  }

  public removeWhite(url) {
    this.canvas.removeWhite(url);
  }

  public addFigure(figure) {
    this.canvas.addFigure(figure);
  }

  public removeSelected() {
    this.canvas.removeSelected();
  }

  public sendToBack() {
    this.canvas.sendToBack();
  }

  public bringToFront() {
    this.canvas.bringToFront();
  }

  public clone() {
    this.canvas.clone();
  }

  public cleanSelect() {
    this.canvas.cleanSelect();
  }

  public setCanvasFill() {
    this.canvas.setCanvasFill();
  }

  public setCanvasImage() {
    this.canvas.setCanvasImage();
  }

  public setId() {
    this.canvas.setId();
  }

  public setOpacity() {
    this.canvas.setOpacity();
  }

  public setFill() {
    this.canvas.setFill();
  }

  public setFontFamily() {
    this.canvas.setFontFamily();
  }

  public setTextAlign(value) {
    this.canvas.setTextAlign(value);
  }

  public setBold() {
    this.canvas.setBold();
  }

  public setFontStyle() {
    this.canvas.setFontStyle();
  }

  public hasTextDecoration(value) {
    this.canvas.hasTextDecoration(value);
  }

  public setTextDecoration(value) {
    this.canvas.setTextDecoration(value);
  }

  public setFontSize() {
    this.canvas.setFontSize();
  }

  public setLineHeight() {
    this.canvas.setLineHeight();
  }

  public setCharSpacing() {
    this.canvas.setCharSpacing();
  }

  public rasterizeJSON() {
    this.canvas.rasterizeJSON();
  }

  public drawMode() {
    this.canvas.drawingMode();
  }

  ChangingSize(e: any) {
    console.log('e: ', this.selectedSize);
    switch (this.selectedSize) {
      case '1':
        this.canvas.size.width = '1500';
        this.canvas.size.height = '500';
        break;
      case '2':
        this.canvas.size.width = '1235';
        this.canvas.size.height = '338';
        break;
      case '3':
        this.canvas.size.width = '600';
        this.canvas.size.height = '240';
        break;
      case '4':
        this.canvas.size.width = '1000';
        this.canvas.size.height = '1000';
        break;
      case '5':
        this.canvas.size.width = '640';
        this.canvas.size.height = '960';
        break;
      case '6':
        this.canvas.size.width = '1920';
        this.canvas.size.height = '1080';
        break;
    }
    console.log('this.canvas.size.height: ', this.canvas.size.height);
    console.log('this.canvas.size.width: ', this.canvas.size.width);
    this.changeSize();
  }

  addById(id: string) {
    const url = `https://eyeverse.world/nft/image/${id}`
    this.addImageOnCanvas(url);
  }
}
