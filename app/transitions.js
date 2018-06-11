export default function(){
  // Add your transitions here, like:
  //   this.transition(
  //     this.fromRoute('people.index'),
  //     this.toRoute('people.detail'),
  //     this.use('toLeft'),
  //     this.reverse('toRight')
  //   );

  this.transition(
    this.fromRoute('index'),
    this.toRoute('software'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('software'),
    this.toRoute('projects'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('index'),
    this.toRoute('projects'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

}
