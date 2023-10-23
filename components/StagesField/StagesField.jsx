import { Badge, Button, Fieldset, Flex } from "@mantine/core";
import { Fragment, useEffect, useState } from "react";
import { uid } from "uid";
import Stage from "../Stage/Stage";

export default function StagesField({ savedData }) {

  const [stages, setStages] = useState([]);

  function addStage() {
    setStages([
      ...stages,
      { stageName: "", stageDate: new Date(), uid: uid() },
    ]);
  }

  useEffect(() => {
    if (savedData && savedData.stages) {
      const newStages = savedData.stages.map((stage) => ({
        ...stage,
        uid: uid(),
      }));
      setStages(newStages);
    }
  }, [savedData]);

  function deleteStage(uid) {
    const filterByUid = stages.filter((stage) => stage.uid !== uid);
    setStages(filterByUid);
    console.log("f", filterByUid);
  }

  useEffect(() => {
    console.log("s", stages);
  }, [stages]);

  return (
    <>
      {stages ? (
        <Fieldset>
          {stages.map((stage, index) => {
            return (
              <Fragment key={index}>
                <Stage
                  count={index + 1}
                  onDeleteStage={deleteStage}
                  uid={stage.uid}
                  stageName={stage.stageName}
                  stageDate={stage.stageDate}
                />
              </Fragment>
            );
          })}
          <Flex>
            <Button mt="10px" w="103.9px" onClick={addStage}>
              + Stage
            </Button>
          </Flex>
        </Fieldset>
      ) : null}
    </>
  );
}
