import { Component, Input, OnInit } from '@angular/core';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { AtividadesService } from 'src/app/services/atividades.service';



@Component({
  selector: 'app-small-cards',
  templateUrl: './small-cards.component.html',
  styleUrls: ['./small-cards.component.css']
})
export class SmallCardsComponent {
  constructor(private atividadeService: AtividadesService) {}
  index = true
  Small = false;
  onInit() {

  }
  quantidadeCards = 4;

  Heroes: any[] = [
    { id: 1, imageURl:"https://lunetas.com.br/wp-content/uploads/2021/07/passos-para-incentivar-autonomia-das-criancas-portal-lunetas.jpg" , name: 'Neuropsicologia: ', text: 'O que é?', show: false, textG:'A Neuropsicologia é uma área da psicologia que ajuda a entender como o cérebro influencia o comportamento e as emoções. Ela pode ajudar de variadas maneiras, vou citar algumas: Na Avaliação, para avaliar habilidades como memória, atenção e linguagem, identificando problemas cognitivos. No Diagnóstico, como transtornos do desenvolvimento, entre outros. Na Reabilitação, criando programas para ajudar pessoas a recuperar ou melhorar suas funções cognitivas após lesões ou doenças neurológicas. No Suporte Psicológico e Educacional, trabalhando com dificuldades de aprendizado, transtornos do espectro autista, TDAH, entre outras condições. Oferecendo suporte e estratégias para ajudar no desenvolvimento acadêmico e emocional. Na Orientação para Familiares, ajudando-os a entender e lidar com a condição do paciente. Pesquisa Científica, contribuindo para pesquisas que buscam entender melhor o cérebro e efetivar os tratamentos. Em resumo, a neuropsicologia combina conhecimentos sobre o cérebro com práticas clínicas para ajudar pessoas a melhorar sua qualidade de vida'},
    { id: 2,  imageURl:"/../assets/crianças.jpg", name: 'TEA ', text: 'Você sabe o que significa TEA? E como ajudar?:', show: false, textG:'  TEA é o Transtorno do Espectro Autista, é uma condição que afeta o desenvolvimento do cérebro, especialmente na comunicação e nas interações sociais. A palavra "espectro" é usada porque os sintomas podem ser muito diferentes de uma pessoa para outra.As características comuns do TEA incluem a dificuldade na comunicação, pode haver dificuldade em desenvolver habilidades de linguagem, compreender e usar a fala, gestos ou expressões faciais. Interações sociais: Pessoas com TEA podem ter dificuldade em entender e responder a normas sociais, interpretar emoções e desenvolver relacionamentos. Comportamentos Repetitivos e Interesses Restritos: Pode haver uma tendência a comportamentos repetitivos (como movimentos estereotipados) e interesses intensos e restritos em tópicos específicos. O TEA é geralmente diagnosticado na infância, embora alguns casos possam ser identificados mais tarde. As causas exatas do TEA não são completamente compreendidas, mas acredita-se que fatores genéticos desempenhem um papel importante. Ajudar uma criança com Transtorno do Espectro Autista (TEA) envolve oferecer suporte, compreensão e intervenções específicas que atendam às suas necessidades individuais. Intervenções e suporte adequados podem ajudar as pessoas com TEA a alcançar seu potencial máximo e melhorar sua qualidade de vida.' },
    { id: 3, imageURl:"/../assets/crianças.jpg", name: 'TDAH: ', text: 'Como funciona o TDAH? Você sabe como lidar? ', show: false, textG:'Segundo o DSM-5-TR, os critérios para diagnóstico do TDAH consistem em um padrão persistente de desatenção e/ou hiperatividade-impulsividade que interfere no funcionamento e no desenvolvimento do indivíduo. O TDAH começa na infância no entanto, a criança em uma idade de início mais precoce não se deve fechar o diagnóstico devido a dificuldade para estabelecer os sintomas nesse período (antes dos seus 4 anos de idade). Fiquem atentos ao marco do desenvolvimento do seu filho(a) isso fará a diferença no bom prognóstico deste pequeno, pais/cuidadores, ao sinal de qualquer atraso busquem "imediatamente" ajuda do profissional!Afinal, o tratamento não é iniciado necessariamente pelo tipo do Transtorno e/ou Diagnóstico, mas sim pelos prejuízos e queixas apresentadas pelos pais, escola, cuidadores, no dia a dia da criança. Não espere para dar início as intervenções necessárias para que seu filho(a) se desenvolva de forma saudável, com uma melhor qualidade de vida e do seu futuro! para identificar se a criança tem TDAH, é importante observar se ela apresenta alguns sintomas de forma persistente e em diferentes ambientes (por exemplo, em casa e na escola). Você pode notar que seu filho: Tem dificuldade em prestar atenção aos detalhes e cometer erros por descuido. Tem dificuldade em seguir instruções e terminar tarefas escolares ou outras atividades. É facilmente distraído por estímulos externos.Fica inquieto, mexendo as mãos ou os pés, ou se remexendo na cadeira, corre ou escala em situações onde isso é inadequado, fala excessivamente.' },
    { id: 4,  imageURl:"/../assets/crianças.jpg", name: 'Consultas: ', text: 'Para saber mais sobre consutas.', show: false, textG:'Atendemos presencialmente e virtualmente. Para mais informações clique no botão "Fale Comigo".'}
  ];




enviarParaComponenteB(hero: any) {
   this.atividadeService.enviarObjetoClicado(hero);
}



selectHero(hero: any) {
  this.enviarParaComponenteB(hero); // Envie o objeto clicado para o serviço
  console.log('Herói clicado:', hero);
  const elemento = document.getElementById('componenteExibicao');
    if (elemento) {
      elemento.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}



abrirAtividades(){
  if(this.index){
  const atividade = document.querySelector('#cardAtividade')
  atividade?.classList.toggle('card_atividades_aberto')
  atividade?.classList.toggle('card_atividades_fechado')
  this.index = false
}
}

}
