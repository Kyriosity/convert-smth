export interface DomainEntity {
    unid: number,
    key?: string,
    remarks?: string,
}

// a workaround for missing nameof() in TS
export const EnsureExistingMemberName = <T>(name: keyof T) => name;

export const DomainProps = {
    unid: EnsureExistingMemberName<DomainEntity>("unid"),
    key: EnsureExistingMemberName<DomainEntity>("key"),
    remarks: EnsureExistingMemberName<DomainEntity>("remarks"),
}