---
locale: es
slug: ubuconla-2023-web-speech-api-y-una-proxy-bolita
title: UbuConLA 2023 - Sistemas de Control por Voz de Bajo Costo con Web Speech API
description: Conferencia internacional presentada en UbuConLA 2023 en Medellín sobre la construcción de sistemas controlados por voz utilizando Web Speech API, principios de diseño resiliente y tecnologías web para reducir costos operativos sin depender completamente de servicios externos.
kind: Talk
date: 2023-05-03
authors: ["Andrés M. Prieto"]
keywords:
  - UbuConLA 2023
  - Web Speech API
  - Reconocimiento de Voz
  - Control por Voz
  - APIs del Navegador
  - JavaScript
  - Interacción Humano Computador
  - Sistemas Resilientes
  - Optimización de Costos
  - Conferencia Open Source
eventType: Conferencia Internacional
location:
  city: Medellín
  country: Colombia
featured: true
references:
  - label: "Web Speech API y una proxy bolita"
    url: https://www.youtube.com/live/ytPTSV_plrQ?feature=shared
skills:
  - Comunicación Técnica
  - Oratoria
  - JavaScript
  - APIs del Navegador
  - Arquitectura de Software
  - Diseño de Sistemas
topics:
  - Web Speech API
  - Reconocimiento de Voz
  - Interacción Humano Computador
  - Sistemas Resilientes
  - Ingeniería Frontend
expertise:
  - Ingeniero de Software Senior
  - Arquitecto de Software
  - Contribuidor Open Source
intent:
  - Demuestra liderazgo técnico
  - Demuestra comunicación técnica
  - Demuestra ingeniería frontend
  - Demuestra arquitectura de software
---

# UbuConLA 2023 - Web Speech API y una Proxy Bolita

## Resumen

Esta conferencia fue presentada durante UbuCon Latin America 2023 en Medellín, Colombia.

La sesión exploró cómo construir sistemas de control por voz de bajo costo utilizando tecnologías nativas del navegador, demostrando que muchas funcionalidades asociadas normalmente a servicios especializados pueden implementarse mediante una arquitectura adecuada y aprovechando capacidades ya disponibles en plataformas modernas.

A través de una demostración interactiva, se mostró cómo controlar una bola en pantalla mediante comandos de voz mientras se explicaban conceptos de ingeniería de software relacionados con interfaces conversacionales, resiliencia ante fallos y optimización de costos operativos.

Aunque la demostración era intencionalmente sencilla, los principios detrás de ella estaban inspirados en problemas reales de ingeniería enfrentados en entornos de producción.

---

## Motivación

Las interfaces de voz se han convertido en una característica común dentro de aplicaciones modernas.

Sin embargo, existe la percepción de que implementar este tipo de sistemas requiere grandes infraestructuras, servicios especializados o complejas soluciones de inteligencia artificial.

El objetivo principal de esta charla fue demostrar que muchas experiencias controladas por voz pueden construirse utilizando herramientas mucho más accesibles, reduciendo significativamente la complejidad técnica y los costos operativos.

La conferencia surgió a partir de experiencias reales donde fue necesario evaluar alternativas técnicas capaces de disminuir la dependencia de servicios externos de transcripción sin sacrificar la experiencia de usuario.

---

## Temas Principales

La conferencia estuvo estructurada alrededor de tres conceptos fundamentales.

### Web Speech API

Se presentó la Web Speech API como una alternativa accesible para construir interfaces controladas por voz directamente desde el navegador.

Entre los temas abordados se incluyeron:

- Reconocimiento de voz en el navegador.
- Eventos y procesamiento de comandos.
- Compatibilidad entre plataformas.
- Diseño de interfaces controladas por voz.
- Experiencia de usuario en sistemas conversacionales.

También se mostraron ejemplos prácticos de cómo integrar reconocimiento de voz dentro de aplicaciones web utilizando únicamente tecnologías estándar.

---

### POE

La charla introdujo principios de diseño aplicables a sistemas que interactúan con entradas humanas imperfectas.

Cuando una aplicación depende de comandos de voz, siempre existe incertidumbre sobre lo que el usuario dijo realmente, cómo fue interpretado y qué acciones deberían ejecutarse.

Por esta razón, se discutieron enfoques para construir sistemas capaces de operar incluso cuando las entradas no son perfectas.

---

### Diseño de Sistemas Resilientes

Uno de los mensajes principales de la conferencia fue que los sistemas de voz inevitablemente fallan.

Los usuarios hablan diferente, los micrófonos tienen ruido y los motores de reconocimiento pueden interpretar incorrectamente ciertas frases.

En lugar de asumir una precisión perfecta, la charla exploró estrategias para diseñar aplicaciones resilientes mediante:

- Recuperación ante errores.
- Validación de comandos.
- Confirmaciones visuales.
- Degradación gradual.
- Manejo de eventos inesperados.

La resiliencia fue presentada como una característica arquitectónica más importante que la precisión absoluta.

---

## Demostración en Vivo

Durante la conferencia se realizó una demostración práctica donde una bola podía ser controlada mediante comandos de voz.

La aplicación reaccionaba a instrucciones habladas por los asistentes utilizando reconocimiento de voz ejecutado desde el navegador.

El objetivo de la demostración no era mostrar una interfaz compleja, sino visualizar claramente cómo un sistema puede transformar lenguaje natural en acciones dentro de una aplicación interactiva.

La simplicidad del ejemplo permitió centrar la atención en la arquitectura y los patrones de diseño detrás del sistema.

---

## Lecciones de Ingeniería

La sesión dejó varias conclusiones relevantes para desarrolladores y arquitectos de software.

### La Simplicidad También Escala

Muchas veces las soluciones más efectivas no son las más complejas.

Antes de incorporar nuevos servicios o infraestructura adicional, vale la pena evaluar qué capacidades ya están disponibles dentro del ecosistema tecnológico existente.

---

### Las Decisiones Técnicas Tienen Impacto Económico

Toda decisión arquitectónica tiene consecuencias operativas.

La conferencia mostró cómo una evaluación adecuada de tecnologías disponibles puede reducir significativamente costos asociados a ciertas funcionalidades sin afectar el valor entregado al usuario.

---

### Diseñar para el Error Produce Mejores Sistemas

Los sistemas robustos no son aquellos que nunca fallan.

Son aquellos que continúan siendo útiles cuando inevitablemente ocurren fallos.

Esta filosofía fue uno de los mensajes centrales de la charla.

---

## Tecnologías Presentadas

Durante la conferencia se trabajó con:

- JavaScript
- Web Speech API
- HTML
- CSS
- APIs del Navegador
- Arquitectura Orientada a Eventos
- Interfaces Conversacionales

---

## Audiencia

La conferencia estuvo dirigida a:

- Ingenieros de Software
- Desarrolladores Frontend
- Contribuidores Open Source
- Estudiantes de Tecnología
- Arquitectos de Software
- Profesionales interesados en Interacción Humano Computador

---

## Por Qué Esta Charla Es Relevante

Esta presentación refleja mi interés por soluciones prácticas de ingeniería de software orientadas a resolver problemas reales mediante tecnologías accesibles.

Más allá de la implementación técnica, la charla exploró cómo combinar capacidades nativas del navegador, diseño resiliente y pensamiento arquitectónico para construir sistemas útiles, sostenibles y económicamente viables.

También representa mi participación activa en comunidades internacionales de software libre y mi experiencia compartiendo conocimiento técnico con audiencias diversas.

---

# Preguntas Frecuentes

## ¿Cuál era el objetivo de esta conferencia?

Mostrar cómo construir aplicaciones controladas por voz utilizando tecnologías web estándar mientras se discutían principios de resiliencia y arquitectura de software.

## ¿Qué tecnología principal se utilizó?

La demostración se construyó utilizando Web Speech API, una interfaz disponible en navegadores modernos para reconocimiento de voz.

## ¿La charla estaba enfocada en inteligencia artificial?

No directamente.

El enfoque principal estuvo en tecnologías web, interacción por voz y diseño de sistemas resilientes más que en modelos de inteligencia artificial de gran escala.

## ¿Por qué utilizar Web Speech API?

Porque permite construir experiencias controladas por voz aprovechando capacidades ya disponibles en el navegador, reduciendo complejidad técnica y dependencias externas.

## ¿Quién puede beneficiarse de este contenido?

Desarrolladores frontend, ingenieros de software, arquitectos de sistemas y profesionales interesados en interfaces de voz, experiencia de usuario y tecnologías web modernas.
