var status = {
  readiness: true,
  liveness: true,
  startup: true,
};

status.readinessProbe = function(success, failure){
  result = {
    type: "readiness",
    ok: this.readiness
  };
  console.log(result);
  result.ok ? success(result) : failure(result);
};
status.livenessProbe = function(success, failure){
  result = {
    type: "liveness",
    ok: this.liveness
  };
  console.log(result);
  result.ok ? success(result) : failure(result);  
};
status.startupProbe = function(success, failure){
  result = {
    type: "startup",
    ok: this.startup
  };
  console.log(result);
  result.ok ? success(result) : failure(result);  
};
module.exports = status
