import { VerticalTimeline } from "react-vertical-timeline-component";
import TimelineElement from "../../components/TimelineElement/TimelineElement";
import "react-vertical-timeline-component/style.min.css";

function Experience(): JSX.Element {
  return (
    <div className="experience" data-testid="experience">
      <VerticalTimeline lineColor="#3e497a">
        <TimelineElement
          type="school"
          date="2011 - 2013"
          title="MPGE filière MP, option informatique"
          subtitle="Lycée Albert Schweitzer, Mulhouse, France"
        />
        <TimelineElement
          type="work"
          date="2014"
          title="Stagiaire"
          subtitle="EID Information, Strasbourg, France"
        />
        <TimelineElement
          type="school"
          date="2015"
          title="Baccalauréat Informatique (semestre étranger)"
          subtitle="Université de Laval, Québec, Canada"
        />
        <TimelineElement
          type="work"
          date="2015"
          title="Stagiaire"
          subtitle="Observatoire astronomique, Strasbourg, France"
        />
        <TimelineElement
          type="school"
          date="2013 - 2016"
          title="Diplôme Ingénieur Informatique"
          subtitle="ENSIIE, Strasbourg, France"
        />
        <TimelineElement
          type="work"
          date="2016 - 2018"
          title="Ingénieur R&D en rendu 3D"
          subtitle="Hapticmedia, Strasbourg, France"
        />
        <TimelineElement
          type="work"
          date="2018 - 2021"
          title="Ingénieur Logiciel Web"
          subtitle="Hapticmedia, Strasbourg, France"
        />
        <TimelineElement
          type="school"
          date="2022"
          title="Formation DevOps"
          subtitle="Centre de formation m2i"
        />
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
