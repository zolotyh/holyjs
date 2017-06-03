import 'dart:async';

void main() {
  timer();
}

Future timer() async {
  print('before');
  new Future.delayed(new Duration(seconds:1), () => print('timer ended'));
  print('after');
}
