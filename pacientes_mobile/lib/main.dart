import 'package:flutter/material.dart';
import 'package:pacientes_mobile/pages/home.dart';

void main() {
  runApp(const PaSiempreApp());
}

class PaSiempreApp extends StatelessWidget {
  const PaSiempreApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Pasiempre App',
      theme: ThemeData(colorScheme: .fromSeed(seedColor: Colors.blue)),
      debugShowCheckedModeBanner: false,
      home: const Home(),
    );
  }
}
