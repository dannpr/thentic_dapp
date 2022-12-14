// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: xuJ96AwQwiTrZC9DsK4jCu
// Component: 0_2x5wTysN
import * as React from "react";
import * as ph from "@plasmicapp/host";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import Tittle from "../../Tittle"; // plasmic-import: K0hjF132al/component
import NfTmint from "../../NfTmint"; // plasmic-import: jgagNCXIi4/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_nft_eaze_mint.module.css"; // plasmic-import: xuJ96AwQwiTrZC9DsK4jCu/projectcss
import sty from "./PlasmicMintPage.module.css"; // plasmic-import: 0_2x5wTysN/css

export const PlasmicMintPage__VariantProps = new Array();

export const PlasmicMintPage__ArgProps = new Array();

function PlasmicMintPage__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };

  return (
    <React.Fragment>
      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            sty.root
          )}
        >
          <Tittle
            data-plasmic-name={"tittle"}
            data-plasmic-override={overrides.tittle}
            className={classNames("__wab_instance", sty.tittle)}
          />

          <NfTmint
            data-plasmic-name={"nfTmint"}
            data-plasmic-override={overrides.nfTmint}
            className={classNames("__wab_instance", sty.nfTmint)}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: ["root", "tittle", "nfTmint"],
  tittle: ["tittle"],
  nfTmint: ["nfTmint"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicMintPage__ArgProps,
          internalVariantPropNames: PlasmicMintPage__VariantProps
        }),

      [props, nodeName]
    );

    return PlasmicMintPage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicMintPage";
  } else {
    func.displayName = `PlasmicMintPage.${nodeName}`;
  }
  return func;
}

export const PlasmicMintPage = Object.assign(
  // Top-level PlasmicMintPage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    tittle: makeNodeComponent("tittle"),
    nfTmint: makeNodeComponent("nfTmint"),
    // Metadata about props expected for PlasmicMintPage
    internalVariantProps: PlasmicMintPage__VariantProps,
    internalArgProps: PlasmicMintPage__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicMintPage;
/* prettier-ignore-end */
