import React, { useEffect } from "react";
import {
  OurStoryContainer,
  OurStoryInfographicContainer,
  OurStoryСhronologyVerticalLine,
  OurStoryСhronologyConnector,
  OurStoryСhronologyLine,
  OurStoryInfographicImageBox,
  OurStoryСhronologyDescriptionBox,
  OurStoryСhronologyDescriptionText,
} from "./styles";

const OurStory = () => {
  useEffect(() => {
    goUpPage();
  }, []);

  const goUpPage = () => {
    window.scrollTo(0, 0);
  };

  return (
    <OurStoryContainer>
      <OurStoryInfographicContainer>
        <OurStoryInfographicImageBox />
        <OurStoryInfographicImageBox />
        <OurStoryInfographicImageBox />
        <OurStoryInfographicImageBox />
        <OurStoryСhronologyVerticalLine />
        <OurStoryСhronologyConnector
          sx={{
            transform: "translate(-50%, -50%)",
          }}
        />
        <OurStoryСhronologyConnector
          sx={{
            transform: "translate(-50%, -50%)",
            top: "700px",
          }}
        />
        <OurStoryСhronologyConnector
          sx={{
            transform: "translate(-50%, -50%)",
            top: "1400px",
          }}
        />
        <OurStoryСhronologyConnector
          sx={{
            transform: "translate(-50%, -50%)",
            top: "2100px",
          }}
        />

        {/*  */}

        <OurStoryСhronologyLine
          sx={{
            transform: "translate(-50%, 0%)",
          }}
        >
          <OurStoryСhronologyDescriptionBox>
            <OurStoryСhronologyDescriptionText>
              1999г.
            </OurStoryСhronologyDescriptionText>
          </OurStoryСhronologyDescriptionBox>

          <OurStoryСhronologyDescriptionBox>
            <OurStoryСhronologyDescriptionText>
              2000г.
            </OurStoryСhronologyDescriptionText>
          </OurStoryСhronologyDescriptionBox>
        </OurStoryСhronologyLine>

        <OurStoryСhronologyLine
          sx={{
            transform: "translate(-50%, 700px)",
          }}
        >
          <OurStoryСhronologyDescriptionBox>
            <OurStoryСhronologyDescriptionText>
              2001г.
            </OurStoryСhronologyDescriptionText>
          </OurStoryСhronologyDescriptionBox>

          <OurStoryСhronologyDescriptionBox>
            <OurStoryСhronologyDescriptionText>
              2002г.
            </OurStoryСhronologyDescriptionText>
          </OurStoryСhronologyDescriptionBox>
        </OurStoryСhronologyLine>

        <OurStoryСhronologyLine
          sx={{
            transform: "translate(-50%, 1400px)",
          }}
        >
          <OurStoryСhronologyDescriptionBox>
            <OurStoryСhronologyDescriptionText>
              2003г.
            </OurStoryСhronologyDescriptionText>
          </OurStoryСhronologyDescriptionBox>

          <OurStoryСhronologyDescriptionBox>
            <OurStoryСhronologyDescriptionText>
              2004г.
            </OurStoryСhronologyDescriptionText>
          </OurStoryСhronologyDescriptionBox>
        </OurStoryСhronologyLine>

        <OurStoryСhronologyLine
          sx={{
            transform: "translate(-50%, 2100px)",
          }}
        >
          <OurStoryСhronologyDescriptionBox>
            <OurStoryСhronologyDescriptionText>
              2005г.
            </OurStoryСhronologyDescriptionText>
          </OurStoryСhronologyDescriptionBox>

          <OurStoryСhronologyDescriptionBox>
            <OurStoryСhronologyDescriptionText>
              2006г.
            </OurStoryСhronologyDescriptionText>
          </OurStoryСhronologyDescriptionBox>
        </OurStoryСhronologyLine>

        <OurStoryInfographicImageBox />
        <OurStoryInfographicImageBox />
        <OurStoryInfographicImageBox />
        <OurStoryInfographicImageBox />
      </OurStoryInfographicContainer>
    </OurStoryContainer>
  );
};

export default OurStory;
