import { School, Work } from "@mui/icons-material";
import { ReactElement } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Experience.css";

function Experience(): ReactElement {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2011 - 2013"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<School />}
        >
          <h3 className="vertical-timeline-element-title">
            MPGE filière MP, option informatique
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Lycée Albert Schweitzer, Mulhouse, France
          </h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2014"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<Work />}
        >
          <h3 className="vertical-timeline-element-title">
            Stagiaire
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            EID Information, Strasbourg, France
          </h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2015"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<School />}
        >
          <h3 className="vertical-timeline-element-title">
            Baccalauréat Informatique (semestre étranger)
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Université de Laval, Québec, Canada
          </h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2015"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<Work />}
        >
          <h3 className="vertical-timeline-element-title">
            Stagiaire
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Observatoire astronomique, Strasbourg, France
          </h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2016"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<School />}
        >
          <h3 className="vertical-timeline-element-title">
            Diplôme Ingénieur Informatique
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            ENSIIE, Strasbourg, France
          </h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2016-2018"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<Work />}
        >
          <h3 className="vertical-timeline-element-title">
            Ingénieur R&D en rendu 3D
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Hapticmedia, Strasbourg, France
          </h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2018-2021"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<Work />}
        >
          <h3 className="vertical-timeline-element-title">
            Ingénieur Logiciel Web
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Hapticmedia, Strasbourg, France
          </h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<School />}
        >
          <h3 className="vertical-timeline-element-title">
            Formation DevOps
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Centre de formation m2i
          </h4>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
