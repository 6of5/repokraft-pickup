# See here for image contents: https://github.com/microsoft/vscode-dev-containers/tree/v0.187.0/containers/javascript-node/.devcontainer/base.Dockerfile

ARG VARIANT="16-buster"
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:${VARIANT}

# Add Cloud Foundry (CLI) as source for apt
RUN curl -fsSL "https://packages.cloudfoundry.org/debian/cli.cloudfoundry.org.key" | apt-key add - \
  && echo "deb https://packages.cloudfoundry.org/debian stable main" | tee /etc/apt/sources.list.d/cloudfoundry-cli.list

RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
  && apt-get -y install --no-install-recommends cf7-cli sqlite

# [Optional] Uncomment if you want to install an additional version of node using nvm
# ARG EXTRA_NODE_VERSION=10
# RUN su node -c "source /usr/local/share/nvm/nvm.sh && nvm install ${EXTRA_NODE_VERSION}"

RUN su node -c "npm install -g @sap/cds-dk generator-saphanaacademy-cap hana-cli mbt yo"
RUN su node -c "cf install-plugin multiapps -f"

# XS Client
# ENV XSCLI="/home/node/xscli"
# ARG XSCLI_ZIP="xs.onpremise.runtime.client_linuxx86_64.zip"
# COPY --chown=user:user $XSCLI_ZIP $XSCLI_ZIP
# RUN mkdir $XSCLI && unzip $XSCLI_ZIP -d $XSCLI && rm $XSCLI_ZIP
# ENV PATH=$PATH:${XSCLI}/bin

# Version
RUN touch /home/node/VERSION && echo "0.1.2" >> /home/node/VERSION
