import { get_definition } from './../base';

export const specify_phase = (
    phase, package_name, package_label, revision, full_version, instance_name, is_required,
    when, additional_args, description
) => get_definition({
        phase,
        package_name,
        package_label,
        revision,
        full_version,
        instance_name,
        required: is_required
    },
    {
        label: 'VersionOne - Specify Phase',
        method: 'specify_phase',
        module: 'main',
        name: 'v1plugin'
    },
    when, additional_args, description
);